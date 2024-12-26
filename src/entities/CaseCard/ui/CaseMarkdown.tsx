import { FC } from 'react'
import Markdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

interface CaseMarkdownProps {
	className?: string
	children: string
}

export const CaseMarkdown: FC<CaseMarkdownProps> = ({ className, children }) => {
	return (
		<Markdown
			className={className}
			rehypePlugins={[rehypeSanitize]}
		>
			{children}
		</Markdown>
	)
}
