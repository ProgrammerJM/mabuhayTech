import List from "./component/List";
import Pokemon from "./component/Pokemon";
import { data } from "./data/data";

export default function Home() {
  return (
    <div>
      <Pokemon data={data} />
      <List data={data} />
    </div>
  );
}
