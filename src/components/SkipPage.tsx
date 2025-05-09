import { CardComponent } from "./CardComponent";
import { SEED_DATA } from "../constants";
import { useEffect, useState } from "react";

export default function SkipPage() {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedSkipId(id);
  };

  useEffect(() => {
    console.log(selectedSkipId);
  }, [selectedSkipId]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {SEED_DATA.map((skip) => (
          <div
            key={skip.id}
            onClick={() => !skip.forbidden && handleSelect(skip.id)}
            style={{
              cursor: skip.forbidden ? "not-allowed" : "pointer",
              flex: "1 1 250px",
              maxWidth: "320px",
            }}
          >
            <CardComponent {...skip} selected={skip.id === selectedSkipId} />
          </div>
        ))}
      </div>
    </div>
  );
}
