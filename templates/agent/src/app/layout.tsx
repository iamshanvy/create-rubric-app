import {Plus_Jakarta_Sans} from 'next/font/google'
import BackgroundGrid from '~/components/BackgroundGrid'
import {META} from '~/constants/metadata'
import './styles.css'

const font = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata = {
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US'
		}
	},
	metadataBase: new URL(META.siteURL)
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body
				className={`${font.className} relative flex h-full min-h-screen w-full flex-col items-center`}>
				<BackgroundGrid className='fixed h-full w-full' />
				<div className='z-10 flex w-full items-center justify-center 2xl:max-w-6xl'>
					{children}
				</div>
			</body>
		</html>
	)
}
