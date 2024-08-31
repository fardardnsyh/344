import Image from 'next/image'
import CursorImage from '%/icons/cursor.svg'

import Text from '#/UI/Text'
import Badge from '#/UI/Badge'
import ArrowLink from '#/UI/ArrowLink'

import {links} from '@/lib/constants'
import '%%/stylesheets/animate-surfing.css'

export default function Hero() {
  return (
    <section data-section="hero-index" className="space-y-5">
      <div className="group w-fit">
        <Text type="heading" className="flex items-center">
          hey, I&#39;m bozzhik
          <Image className="w-5 ml-4 animate-surfing group-hover:scale-[115%] duration-300" src={CursorImage} alt="" />
        </Text>
      </div>

      <Text>
        I&#39;m a website developer and user interface designer. I am studying at HSE to design and develop <Badge href="#PROJECTS" icon={CursorImage} text="digital products" />.
        <span className="hidden sm:block sm:s-3" /> Currently, I work as a self-employed frontend developer, specializing in creating impressive <Badge href="/works" className="mr-[0.5px]" icon={CursorImage} text="websites" /> that boost business.
      </Text>

      <div className="flex gap-5 xl:gap-3.5 sm:flex-wrap sm:gap-x-3.5 sm:gap-y-2 text-neutral-300">
        {Object.entries(links).map(([key, link]) => (
          <ArrowLink key={key} href={link.url} text={link.text} className={key == 'inst' ? 'sm:hidden' : ''} />
        ))}
      </div>
    </section>
  )
}
