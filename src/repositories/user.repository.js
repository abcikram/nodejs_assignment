import User from "../models/user.model.js";
import { BaseRepository } from "./base.repository.js";

export class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async paginatedUsers(data, page = 1, limit = 10) {
        try {
            const skip = (page - 1) * limit;
            const users = await User.aggregate([
                { $match: { isDeleted: false, ...data } },
                {
                    $facet: {
                        paginatedResults: [{ $skip: skip }, { $limit: limit }],
                        totalCount: [{ $count: "count" }],
                    },
                },
                {
                    $project: {
                        paginatedResults: 1,
                        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
                        totalPages: {
                            $ceil: {
                                $divide: [
                                    { $arrayElemAt: ["$totalCount.count", 0] },
                                    limit,
                                ],
                            },
                        },
                    },
                },
            ],
                { allowDiskUse: true }
            );

            const { paginatedResults, totalCount = 0, totalPages = 0 } = users[0];
            return {
                users: paginatedResults || [],
                totalCount,
                totalPages,
            };
        } catch (error) {
            console.error("Error fetching users:", error);
            return { users: [], totalCount: 0, totalPages: 0 };
        }
    }
}
