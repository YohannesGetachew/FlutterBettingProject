import { Resolver, Mutation, Args } from "@nestjs/graphql";
import {FileUpload} from "graphql-upload";
import { createWriteStream } from "fs";
import { GraphQLUpload } from "apollo-server-express"

@Resolver()
export class FileResolver {
    @Mutation(() => String)
    async uploadFile(@Args({name: 'file', type: () => GraphQLUpload}) upload): Promise<string> {
        console.log(upload);
        // return new Promise(async (resolve, reject) => 
        //     createReadStream()
        //         .pipe(createWriteStream(`./uploads/${filename}`))
        //         .on('finish', () => resolve(`./uploads/${filename}`))
        //         .on('error', () => reject(`./uploads/${filename}`))
        // );
        return 'Hello';
    }
}