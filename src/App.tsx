import { AppHeader } from "./components/app-header"
import { EmptyUpload } from "./components/empty-upload"

export function App() {
  return (
    <div className="flex h-svh flex-col">
      <AppHeader />
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="w-full md:w-1/2 min-w-0 border-r border-b md:border-b-0 flex items-center justify-center">
          <EmptyUpload />
        </div>

        <div className="w-full md:w-1/2 min-w-0">
          Chat area
        </div>
      </div>
    </div>
  )
}

export default App
