import { ADD_VIDEO } from './_action-types.js';

const intialState = [
  {
    "id": "e1f96764-ca49-4a31-8700-38d12b3028f7",
    "type": "video",
    "meta_data": {
      "title": "meta title",
      "keywords": "meta keywords",
      "description": "meta description"
    },
    "content": {
      "title": "One more video post",
      "body": "Watch this and you'll ... something"
    },
    "date_created": "2016-01-24T09:46:53.477",
    "date_last_updated": null,
    "date_published": null,
    "status": "draft",
    "tags": []
  },
  {
    "id": "82dcf491-0fd7-4df1-bb77-8fe9b64adc4b",
    "type": "video",
    "meta_data": {
      "title": "meta title",
      "keywords": "meta keywords",
      "description": "meta description"
    },
    "content": {
      "title": "A video post",
      "body": "This video is interesting"
    },
    "date_created": "2016-01-23T11:23:41.747",
    "date_last_updated": null,
    "date_published": null,
    "status": "draft",
    "tags": []
  },
  {
    "id": "2a719662-a009-48a8-87f6-cd33eefef634",
    "type": "video",
    "meta_data": {
      "title": "meta title",
      "keywords": "meta keywords",
      "description": "meta description"
    },
    "content": {
      "title": "Another video post",
      "body": "This video is EXTREMELY interesting"
    },
    "date_created": "2016-01-24T09:46:14.243",
    "date_last_updated": null,
    "date_published": null,
    "status": "draft",
    "tags": []
  }
];

export default function cms(state = intialState, action) {
	switch (action.type) {
		case ADD_VIDEO: 

			return [
				action.video,
				...state
			];

		default:
			return state;
	}
}