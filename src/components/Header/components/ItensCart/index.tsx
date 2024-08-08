// -> Icons lib
import { X } from "lucide-react";

// -> Utils
import { cn } from "../../../../utils/cn";
import { formatCurrency } from "../../../../utils/formatCurrency";

// -> Types
interface IItensCartProps {
  isOpen: boolean;
  onClose(): void;
}

export function ItensCart({ isOpen, onClose }: IItensCartProps) {
  return (
    <aside
      data-testid="itens-cart"
      className={cn(
        `flex flex-col flex-1 fixed w-[75vw] h-full max-w-[368px] right-[-100%] top-0 bg-zinc-100 dark:bg-zinc-800 
        duration-700 pb-2`,
        isOpen && "right-0"
      )}
    >
      <header className="flex items-center justify-end p-2 w-full h-12">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 rounded shadow-md bg-white dark:bg-zinc-900"
        >
          <X />
        </button>
      </header>

      <main className="flex flex-1">
        <span> a </span>
      </main>

      <footer className="flex items-center justify-between p-2 w-full h-12 ">
        <strong role="strong"> Total </strong>
        <span className="text-sm"> {formatCurrency(32322.33)} </span>
      </footer>
    </aside>
  );
}
