// =============================
// PARALLAX BACKGROUND COMPONENT
// =============================
// Purpose:
// - Provides subtle animated background depth
// - Uses multiple layers moving at different speeds
// - Purely decorative (no interaction)

import "./Parallax.css";

export default function Parallax() {
    return (
        <div className="parallax">
            {/* 
        Back layer:
        - Largest spacing
        - Slowest movement
        - Creates deep background depth
      */}
            <div className="layer layer-back"></div>

            {/* 
        Middle layer:
        - Medium density
        - Moderate speed
        - Adds visual richness
      */}
            <div className="layer layer-mid"></div>

            {/* 
        Front layer:
        - Smallest spacing
        - Slightly faster movement
        - Subtle foreground highlights
      */}
            <div className="layer layer-front"></div>
        </div>
    );
}
