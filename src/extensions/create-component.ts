import { Toolbox } from 'gluegun/build/types/domain/toolbox'

module.exports = (toolbox: Toolbox) => {
  const {
    filesystem,
    template,
    print: { success, error }
  } = toolbox

  async function isReactNative() {
    const packageJson = await filesystem.read('package.json', 'json')
    return Boolean(packageJson.dependencies['react-native'])
  }

  async function createComponent(folder, name) {
    if (!name) {
      error('Name must be specified')
      return
    }
    await template.generate({
      template: 'component.tsx.ejs',
      target: `${folder}/${name}/index.tsx`,
      props: {
        name
      }
    })

    const styleTemplate = (await isReactNative())
      ? 'style-react.ts.ejs'
      : 'style-native.ts.ejs'

    await template.generate({
      template: styleTemplate,
      target: `${folder}/${name}/style.ts`
    })

    success(`Generated ${name} with success`)
  }

  toolbox.createComponent = createComponent
}
