// Adapted from https://github.com/houmahani/codrops-depth-gallery (MIT)
// Instead of the original's color-chip specs (CMYK/RGB/PMS), this overlay
// shows each plane's project title, location, description and a CTA link.

class Label {
  constructor(gallery) {
    this.gallery = gallery;

    this.overlayElement = null;
    this.locationElement = null;
    this.titleElement = null;
    this.descriptionElement = null;
    this.linkElement = null;
    this.activePlaneIndex = -1;
  }

  createElement() {
    const element = document.createElement("section");
    element.className = "po-depth-gallery-label";
    element.innerHTML = `
      <article class="po-depth-gallery-label__card">
        <h2 class="po-depth-gallery-label__title"></h2>
        <p class="po-depth-gallery-label__location"></p>
        <p class="po-depth-gallery-label__description"></p>
        <a class="po-depth-gallery-label__link" href="#">View Project &rarr;</a>
      </article>
    `;

    return {
      element,
      locationElement: element.querySelector(".po-depth-gallery-label__location"),
      titleElement: element.querySelector(".po-depth-gallery-label__title"),
      descriptionElement: element.querySelector(".po-depth-gallery-label__description"),
      linkElement: element.querySelector(".po-depth-gallery-label__link"),
    };
  }

  init(container) {
    if (this.overlayElement) return;

    const { element, locationElement, titleElement, descriptionElement, linkElement } = this.createElement();

    this.overlayElement = element;
    this.locationElement = locationElement;
    this.titleElement = titleElement;
    this.descriptionElement = descriptionElement;
    this.linkElement = linkElement;
    this.overlayElement.style.opacity = "0";

    (container || document.body).append(this.overlayElement);
  }

  getTargetPlaneIndex(cameraZ) {
    const blendData = this.gallery.getPlaneBlendData(cameraZ);
    if (!blendData) return -1;
    return blendData.blend >= 0.5 ? blendData.nextPlaneIndex : blendData.currentPlaneIndex;
  }

  applyPlaneContent(planeIndex) {
    const plane = this.gallery.planes[planeIndex];
    if (!plane || this.activePlaneIndex === planeIndex) return;

    const label = plane.userData.label || {};

    this.titleElement.textContent = label.title || "";
    this.locationElement.textContent = [label.location, label.status].filter(Boolean).join(" – ");
    this.descriptionElement.textContent = label.description || "";
    if (label.href) {
      this.linkElement.href = label.href;
      this.linkElement.style.display = "";
    } else {
      this.linkElement.style.display = "none";
    }

    this.activePlaneIndex = planeIndex;
  }

  resize() {}

  update(camera = null) {
    if (!camera || !this.overlayElement) return;

    const targetPlaneIndex = this.getTargetPlaneIndex(camera.position.z);
    if (targetPlaneIndex < 0) {
      this.overlayElement.style.opacity = "0";
      return;
    }

    this.applyPlaneContent(targetPlaneIndex);
    this.overlayElement.style.opacity = "1";
  }

  dispose() {
    this.overlayElement?.remove();
    this.overlayElement = null;
    this.locationElement = null;
    this.titleElement = null;
    this.descriptionElement = null;
    this.linkElement = null;
    this.activePlaneIndex = -1;
  }
}

export { Label };
