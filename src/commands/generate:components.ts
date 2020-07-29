import { Toolbox } from 'gluegun/build/types/domain/toolbox'

module.exports = {
  name: 'generate:component',
  description: 'Create a new component inside src/components',
  run: async (toolbox: Toolbox) => {
    const { parameters, createComponent } = toolbox

    const name = parameters.first

    await createComponent('src/components', name)
  }
}
