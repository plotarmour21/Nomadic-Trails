// ExampleComponent.jsx
const ExampleComponent = () => {
  return (
    <card className="gap-2 flex ">
      <div className="  bg-zinc-800 text-white shadow-md rounded-lg mx-2 my-2 ">
        <img
          className="w-full h-48 object-cover p-1"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="Example"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold">Example Title</h2>
          <p className="text-white font-mono font-sm">
            Example description goes here.
          </p>
        </div>
      </div>
    </card>
  );
};

export default ExampleComponent;
