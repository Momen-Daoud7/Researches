/*
	Here you can find all folders routes
*/

router.get("localhost:8000/api/folders");

/*
	@description: it will return you all the folders in the database
	@method GET
	@route /api/folders
    @response example: 
    {
    
        "success": true,
        "folders": [
            {
                "id": 1,
                "name": "momenll",
                "created_at": "2023-01-29T18:43:39.000000Z",
                "updated_at": "2023-01-29T18:43:39.000000Z"
            },
            {
                "id": 2,
                "name": "peter",
                "created_at": "2023-01-29T18:52:45.000000Z",
                "updated_at": "2023-01-29T18:52:45.000000Z"
            }
        ]
    }
*/

router.get("localhost:8000/api/folders/:id");

/*
	@description: it will return a single folder and it will send 404 if it not exist
	@method GET
	@route /api/folders/:id
	@response example :
	{
    "success": true,
    "folder": {
        "id": 2,
        "name": "peter",
        "created_at": "2023-01-29T18:52:45.000000Z",
        "updated_at": "2023-01-29T18:52:45.000000Z"
    }
}
*/

router.post("localhost:8000/api/folders");

/*
	@description: it will create a new folder and it will send 400 if there's wrong with the fields validation
	@method Post
	@route /api/folders
	@request example:
	{
		"name": "peter"
	}

    @response example: 
    {
        "success": true,
        "folder": {
            "name": "peter",
            "updated_at": "2023-01-29T18:52:45.000000Z",
            "created_at": "2023-01-29T18:52:45.000000Z",
            "id": 2
        }
    }
*/

router.put("localhost:8000/api/folders/:id");

/*
	@description: it will update an exitting folder and it will send 404 if it not exist
	@method PATCH or PUT
	@access private
	@authorize only admins can access it
	@route /api/folders/:id
	@request example:
	{
		name:"john"
	}
    @response example:
    {
        "success": true,
        "folder": {
            "name": "john",
            "updated_at": "2023-01-29T18:52:45.000000Z",
            "created_at": "2023-01-29T18:52:45.000000Z",
            "id": 2
        }
    }
*/

router.delete("localhost:8000/api/folders/:id");

/*
	@description: it will delete an exitting folder and it will send 404 if it not exist
	@method DELETE
	@route /api/folders/:id
*/

router.get("localhost:8000/api/folders/subfolders/:id");

/*
	@description: it will return a list of the subfolders of the target folder
	@method GET
	@route /api/folders/subfolders/:id
	@response example :
	{
        "success": true,
        "subfolders": [
            {
                "id": 3,
                "name": "momen",
                "folder_id": 1,
                "parent_id": null,
                "created_at": "2023-01-29T19:03:12.000000Z",
                "updated_at": "2023-01-29T19:03:12.000000Z"
            },
            {
                "id": 4,
                "name": "big",
                "folder_id": 1,
                "parent_id": null,
                "created_at": "2023-01-29T19:03:21.000000Z",
                "updated_at": "2023-01-29T19:03:21.000000Z"
            }
        ]
    
    }
*/

router.get("localhost:8000/api/folders/files/:id");

/*
	@description: it will return a single folder and it will send 404 if it not exist
	@method GET
	@route /api/folders/files/:id
	@response example :
	{
        "success": true,
        "files": [
            {
                "id": 1,
                "name": "m",
                "text": "john",
                "folder_id": 1,
                "subfolder_id": null,
                "created_at": "2023-01-29T19:05:38.000000Z",
                "updated_at": "2023-01-29T19:05:38.000000Z"
            },
            {
                "id": 2,
                "name": "m",
                "text": "john",
                "folder_id": 1,
                "subfolder_id": null,
                "created_at": "2023-01-29T19:05:39.000000Z",
                "updated_at": "2023-01-29T19:05:39.000000Z"
            }
        ]
    }
*/