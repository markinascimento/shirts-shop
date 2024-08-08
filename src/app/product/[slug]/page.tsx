export default function Product({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1> Acessando a página com o ID {params.slug} </h1>
    </div>
  );
}
