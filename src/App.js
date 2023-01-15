import "./styles.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

export default function App() {
  const contactsList = [
    {
      id: 1,
      name: "radhi",
      email: "radhi@gmail.com"
    },
    {
      id: 2,
      name: "anand",
      email: "anand@gmail.com"
    },
    {
      id: 3,
      name: "reka",
      email: "reka@gmail.com"
    }
  ];
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList contacts={contactsList} />
    </div>
  );
}
