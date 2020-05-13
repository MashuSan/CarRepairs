export async function downloadRecord(id) {
    const eventData = await fetch("http://localhost:5000/services/" + id);
    if (!eventData){return 0;}
    return eventData;
}