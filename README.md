# nodejs_assignment

## API Response Example for Fetching Users

```
{
    "success": true,
    "data": {
        "users": [
            {
                "_id": "6902500d30411b7703a663e5",
                "name": "Bikarm",
                "email": "bik@yopmail.com",
                "status": "active",
                "isDeleted": false,
                "createdAt": "2025-10-29T17:34:05.594Z",
                "updatedAt": "2025-10-29T17:34:05.594Z"
            },
            {
                "_id": "690255eb83617d86520e80ac",
                "name": "Bikdarm",
                "email": "bidk@yopmail.com",
                "status": "active",
                "isDeleted": false,
                "createdAt": "2025-10-29T17:59:07.626Z",
                "updatedAt": "2025-10-29T17:59:07.626Z"
            }
        ],
        "totalCount": 2,
        "totalPages": 1
    },
    "message": "Users fetched successfully"
}

```

### API Endpoint: `GET /api/users?page=1&limit=10`
- Fetches a paginated list of users.

### Validation
joi is used for validating user input data.