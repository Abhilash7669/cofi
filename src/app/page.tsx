import Image from "next/image";

type HeroCMS = {
  title: string;
  description: string;
  tag: string;
  image: string;
}

export default async function Home() {

  const m_response = await fetch("http://localhost:8080/");

  const m_data: HeroCMS = await m_response.json();

  return (
    <MyComponent content={m_data} />
  );
}

function MyComponent({ content }: { content: HeroCMS }) {
  return (
    <div className="min-h-screen">
      <p>
        {content.tag ? content.tag : "Tag"}
      </p>
      <p>{content?.title ? content.title : "Fetching title..."}</p>
      <p>
        {content.description ? content.description : "Fetching description"}
      </p>
      {content?.image ? (
        <Image height={500} width={500} src={content.image} alt="image" />
      ) : (
        <p>Fetching Image...</p>
      )}
    </div>
  );
}
