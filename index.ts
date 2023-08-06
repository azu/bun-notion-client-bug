import { Client } from "@notionhq/client";
const notion = new Client({ auth: "secret_dummy" });
const response = await notion.databases.query({
    database_id: "dummy",
    filter: {
        property: 'Name',
        title: {
            "equals": "test"
        }
    }
});
