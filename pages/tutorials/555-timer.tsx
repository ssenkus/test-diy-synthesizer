import Header from '../../components/Header';

export default function Timer555() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl mb-4">555 Timer Circuit</h1>
        <p className="mb-4">
          The 555 timer is a simple integrated circuit that can be used to make many different electronic circuits. With this tutorial, you will learn how to create a 555 timer circuit.
        </p>
        <h2 className="text-xl mb-2">Schematics</h2>
        <img src="/schematics/555-timer.png" alt="555 Timer Schematics" className="mb-4"/>
        <h2 className="text-xl mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          <li>Connect the ground (pin 1) and the power (pin 8).</li>
          <li>Connect a resistor between the discharge (pin 7) and the threshold (pin 6).</li>
          <li>Connect the threshold (pin 6) to the trigger (pin 2).</li>
          <li>Connect a capacitor between the trigger (pin 2) and the ground (pin 1).</li>
          <li>Connect the output (pin 3) to your circuit.</li>
          // Add more instructions here
        </ol>
      </main>
    </div>
  );
}
