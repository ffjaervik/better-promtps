import PromptCard from "./PromptCard"

export default function Profile({name, description, data, handleEdit, handleDelete}) {
  return (
    <section className="w-full">
      <h1>{name} Profile</h1>
    </section>
  )
}
