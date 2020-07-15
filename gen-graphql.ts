import { NestFactory  } from '@nestjs/core'
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory  } from '@nestjs/graphql'
import { printSchema } from 'graphql'


import * as fs from 'fs'

import { UserResolver } from './src/user/user.resolver'
import { TransporteurResolver } from './src/transporteur/transporteur.resolver'

async function generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);
    await app.init();
  
    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create([UserResolver, TransporteurResolver]);
    console.log(printSchema(schema));

    fs.writeFile('graphql.gql', printSchema(schema), () => {
      console.log('schema generated!')
    });

  }

  generateSchema();