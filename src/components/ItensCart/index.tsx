// -> Icons lib
import { X } from "lucide-react";

// -> Utils
import { cn } from "../../utils/cn";
import { formatCurrency } from "../../utils/formatCurrency";

// -> Types
interface IItensCartProps {
  isOpen: boolean;
  onClose(): void;
}

export function ItensCart({ isOpen, onClose }: IItensCartProps) {
  const products = [];
  return (
    <aside
      data-testid="itens-cart"
      className={cn(
        `flex flex-col flex-1 fixed w-[75vw] h-full max-w-[368px] right-[-100%] top-0 bg-zinc-100 dark:bg-zinc-800 
        duration-700 pb-2 shadow-2xl`,
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
        {products.length <= 0 && (
          <div className="flex flex-1 w-full h-full items-center justify-center">
            <strong className="text-lg tracking-[-0.5px] text-zinc-400 dark:text-zinc-400">
              Você não tem produtos <br />
              no carrinho :(
            </strong>
          </div>
        )}
      </main>

      {products.length <= 0 && (
        <footer className="flex items-center justify-between p-2 w-full h-12 ">
          <strong role="strong"> Total </strong>
          <span className="text-sm"> {formatCurrency(32322.33)} </span>
        </footer>
      )}
    </aside>
  );
}
