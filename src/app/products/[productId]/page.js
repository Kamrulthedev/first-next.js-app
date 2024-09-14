const DaynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);

  return (
    <div>
      <h1>This is Prodect Daynamic Page {params.productId}</h1>
    </div>
  );
};

export default DaynamicPage;
