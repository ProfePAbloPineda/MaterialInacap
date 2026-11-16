from pathlib import Path
from datetime import datetime
import os
import sys


def main():
    base = Path(__file__).resolve().parent
    carpeta = base / "salidas"
    carpeta.mkdir(exist_ok=True)
    momento = datetime.now()
    archivo = carpeta / f"nota_{momento:%Y%m%d_%H%M%S_%f}.txt"
    texto = (
        "ENLACE SCADA - WINDOWS - PYTHON\n"
        f"Fecha: {momento:%d-%m-%Y %H:%M:%S}\n"
        "Se ejecuto el programa Python de la experiencia.\n"
        "Esta nota no contiene datos leidos del PLC.\n"
    )
    archivo.write_text(texto, encoding="utf-8")
    print(f"Interprete: {sys.executable}")
    print(f"Archivo creado: {archivo}")
    os.startfile(str(archivo))  # Windows: abrir con la aplicacion asociada.
    print("Se solicito abrir el archivo en Windows.")


if __name__ == "__main__":
    main()
