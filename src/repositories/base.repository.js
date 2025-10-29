export class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async findAll(data) {
        return await this.model.find(data || {});
    }

    async findById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        const doc = new this.model(data);
        return await doc.save();
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}
