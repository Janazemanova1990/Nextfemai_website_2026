import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ApplicationForm } from '../ApplicationForm'

const mockWebhookUrl = 'https://test-webhook.example.com/form'

beforeEach(() => {
  vi.stubEnv('VITE_FORM_WEBHOOK_URL', mockWebhookUrl)
})

afterEach(() => {
  vi.restoreAllMocks()
})

it('renders all 6 form fields', () => {
  render(<ApplicationForm />)
  expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/currently working on/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/tools are you using/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/what do you want from this community/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/link to something/i)).toBeInTheDocument()
})

it('shows success message after successful submission', async () => {
  globalThis.fetch = vi.fn().mockResolvedValueOnce({ ok: true } as Response)

  render(<ApplicationForm />)
  fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jana' } })
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jana@example.com' } })
  fireEvent.change(screen.getByLabelText(/currently working on/i), { target: { value: 'An AI tool' } })
  fireEvent.change(screen.getByLabelText(/tools are you using/i), { target: { value: 'Claude Code' } })
  fireEvent.change(screen.getByLabelText(/what do you want from this community/i), { target: { value: 'Peers' } })

  fireEvent.click(screen.getByRole('button', { name: /apply to join community/i }))

  await waitFor(() => {
    expect(screen.getByText(/application sent/i)).toBeInTheDocument()
  })
})

it('shows error message when webhook fails', async () => {
  globalThis.fetch = vi.fn().mockResolvedValueOnce({ ok: false } as Response)

  render(<ApplicationForm />)
  fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jana' } })
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jana@example.com' } })
  fireEvent.change(screen.getByLabelText(/currently working on/i), { target: { value: 'An AI tool' } })
  fireEvent.change(screen.getByLabelText(/tools are you using/i), { target: { value: 'Claude Code' } })
  fireEvent.change(screen.getByLabelText(/what do you want from this community/i), { target: { value: 'Peers' } })

  fireEvent.click(screen.getByRole('button', { name: /apply to join community/i }))

  await waitFor(() => {
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
})

it('POSTs form data as JSON to the webhook URL', async () => {
  globalThis.fetch = vi.fn().mockResolvedValueOnce({ ok: true } as Response)

  render(<ApplicationForm />)
  fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jana' } })
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jana@example.com' } })
  fireEvent.change(screen.getByLabelText(/currently working on/i), { target: { value: 'An AI tool' } })
  fireEvent.change(screen.getByLabelText(/tools are you using/i), { target: { value: 'Claude Code' } })
  fireEvent.change(screen.getByLabelText(/what do you want from this community/i), { target: { value: 'Peers' } })

  fireEvent.click(screen.getByRole('button', { name: /apply to join community/i }))

  await waitFor(() => {
    expect(globalThis.fetch).toHaveBeenCalledWith(
      mockWebhookUrl,
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('"firstName":"Jana"'),
      })
    )
  })
})
