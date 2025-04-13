export default function Cards() {
    const cards = [1, 2, 3];
    return (
      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <div key={i} className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-bold mb-2">Card {c}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae.</p>
          </div>
        ))}
      </div>
    );
  }