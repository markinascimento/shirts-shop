// -> Icons lib
import { X, XCircle } from "lucide-react";

// -> Utils
import { useShoes } from "@/hooks/useShoes";
import Image from "next/image";
import { cn } from "../../utils/cn";
import { formatCurrency } from "../../utils/formatCurrency";

// -> Types
interface IItensCartProps {
  isOpen: boolean;
  onClose(): void;
}

export function ItensCart({ isOpen, onClose }: IItensCartProps) {
  const { cartItems, handleRemoveFromCart } = useShoes()

  const totalValue = cartItems.reduce((prev, item) => {
    return prev + (item.product.price * item.quantity)
  }, 0)

  return (
    <aside
      data-testid="itens-cart"
      className={cn(
        `flex flex-col flex-1 fixed w-[75vw] h-full max-w-[368px] right-[-100%] top-0 bg-zinc-100 dark:bg-zinc-800 
        duration-700 pb-2 shadow-2xl z-10`,
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

      <main className="flex flex-col gap-4 flex-1 px-2 mt-4 overflow-auto">
        {cartItems.length <= 0 ? (
          <div className="flex flex-1 w-full h-full items-center justify-center">
            <strong className="text-lg tracking-[-0.5px] text-zinc-400 dark:text-zinc-400">
              Você não tem produtos <br />
              no carrinho :(
            </strong>
          </div>
        ) : (
          cartItems.map(({ product, quantity }) => (
            <div 
              key={product._id}
              className="flex w-full items-center justify-between h-16 p-1 rounded-lg relative"
            >
              <div className="flex items-center gap-1">
                <Image 
                  src={product.images[0]}
                  alt="Imagem do produto"
                  height={54}
                  width={54}
                  className="rounded-lg"
                />
                <p>
                  <span className="text-xs font-medium"> {product.title} </span>
                  <small className="block text-xs font-medium"> {quantity}x </small>
                </p>
              </div>
  
              <strong className="text-sm font-semibold"> 
                {formatCurrency(quantity * product.price)} 
              </strong>
  
              <button 
                type="button"
                onClick={() => handleRemoveFromCart(product)}
                className="absolute right-0 top-0 w-5 h-5"
              >
                <XCircle className="size-4" />
              </button>
            </div>
          ))
        )}
      </main>

      {cartItems.length > 0 && (
        <footer className="flex items-center justify-between p-2 w-full h-12 ">
          <strong role="strong"> Total </strong>
          <span className="text-sm"> {formatCurrency(totalValue)} </span>
        </footer>
      )}
    </aside>
  );
}
