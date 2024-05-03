import { CheckIcon } from '@radix-ui/react-icons'

import { ToggleThemeButton } from '@/components/toggle-theme-button'

const Home = () => {
  const features = [
    'Next.js 14 App Router',
    'Redux',
    'Shadcn UI',
    'Theme Configuration',
    "Let's get started",
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-3 p-4 bg-accent rounded-md">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            <h1 className="text-primary">{feature}</h1>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <h1 className="font-medium">
          Next.js Shadcn Redux Starter by Aftab Rehan
        </h1>
        <p className="text-sm text-muted-foreground max-w-[400px] text-center">
          Next.js 14 App Router, TypeScript, Tailwind CSS, Redux, Shadcn UI and
          Next Theme starter template.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <ToggleThemeButton />
        <span>Toggle Theme</span>
      </div>
    </main>
  )
}

export default Home
