import { AppHeader } from "./components/app-header"

export function App() {
  return (
    <div className="flex h-svh flex-col">
      <AppHeader />
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="w-full md:w-1/2 min-w-0 border-r md:border-r border-b md:border-b-0">
          PDF area
        </div>

        <div className="w-full md:w-1/2 min-w-0">
          Chat area
        </div>
      </div>
    </div>
  )
}

export default App
