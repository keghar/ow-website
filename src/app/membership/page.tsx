import Contact from '@/components/Contact'
import { Container } from '@/components/Container'

export default function Page() {
  return (
    <Container>
      <div>
        <h1 className="bg-gradient-to-b from-slate-800 via-[#0e57afE6] to-slate-800 bg-clip-text text-center font-display text-3xl font-semibold tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
          Membership
        </h1>
        <p>
          If you are interested in joining Oconee Winds. Please fill out the
          form below
        </p>
        <div>
          <form>
            <Contact />
          </form>
        </div>
      </div>
    </Container>
  )
}
