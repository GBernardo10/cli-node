import { Toolbox } from 'gluegun/build/types/domain/toolbox'

module.exports = {
  name: 'generate:page',
  description: 'Create a new page inside src/pages',
  run: async (toolbox: Toolbox) => {
    const { parameters, createComponent } = toolbox

    const name = parameters.first

    await createComponent('src/page', name)
  }
}
