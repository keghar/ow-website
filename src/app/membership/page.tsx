import Contact from '@/components/Contact'
import { Container } from '@/components/Container'

export default function Page() {
  return (
    <Container>
      <div>
        <h1>Membership</h1>
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
