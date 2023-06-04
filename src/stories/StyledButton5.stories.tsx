import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../../components/StyledButton'
import MDXDocument from './StyledButton5.mdx'

export default {
  title: 'StyledButton (5) - ドキュメントを使用する',
  component: StyledButton,
  parameters: {
    docs: {
      // ドキュメント用のmdxコンポーネントを指定
      //TODO: MDXドキュメントが表示されない。要調査
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({})

// デフォルトのpropsを設定する
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}