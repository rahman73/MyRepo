const iframeViz = {
  render: (data, options) => {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "100%";

    const iframe = document.createElement("iframe");
    iframe.src = "https://ebrochures.toyota.astra.co.id/alphard.html";
    iframe.style.width = "100%";
    iframe.style.height = "600px"; // bisa disesuaikan
    iframe.style.border = "none";

    container.appendChild(iframe);
    return container;
  }
};

export default iframeViz;
