import _ from "lodash";
import { z } from "zod";
import fs from "node:fs";

//const numbers = [1, 2, 3, 4, 5];

//const chunkedArr = _.chunk(numbers, 2);

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.union([z.string(), z.number()])),
});

type Data = z.infer<typeof dataSchema>;

function output(data: Data) {
  console.log(data);
}

const content = JSON.parse(fs.readFileSync("data.json").toString());

const parsedData = dataSchema.parse(content);

output(parsedData);
