import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCanvasProps {
  value: string;
  size?: number;
  dark?: string;
  light?: string;
  className?: string;
}

export function QRCanvas({
  value,
  size = 180,
  dark = "#0f172a",
  light = "#ffffff",
  className,
}: QRCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    QRCode.toCanvas(ref.current, value, {
      width: size,
      margin: 1,
      color: { dark, light },
      errorCorrectionLevel: "M",
    }).catch(() => undefined);
  }, [value, size, dark, light]);

  return (
    <canvas
      ref={ref}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
      aria-label={`QR code for ${value}`}
      role="img"
    />
  );
}

export default QRCanvas;
