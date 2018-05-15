let abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "articlesCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_content",
				"type": "string"
			}
		],
		"name": "publishArticle",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "articles",
		"outputs": [
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "content",
				"type": "string"
			},
			{
				"name": "author",
				"type": "address"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
