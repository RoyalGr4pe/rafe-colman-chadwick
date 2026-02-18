import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'rafe-colman-chadwick',

  projectId: 'zqh9ylb4',
  dataset: 'run-uk',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
