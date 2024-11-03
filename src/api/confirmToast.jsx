import { toast } from 'react-toastify';

const CustomConfirmToast = ({ message, onConfirm, onCancel }) => {
  const handleConfirm = () => {
    onConfirm();
    toast.dismiss();
  };

  const handleCancel = () => {
    onCancel();
    toast.dismiss();
  };

  return (
    <div className='h-[100px]'>
      <p>{message}</p>
      <div className='relative top-8 text-xl'>
      <button className='mr-4 bg-blue-300 w-[102px] font-black text-black  hover:text-green-800' onClick={handleConfirm}>Aceptar</button>
      <button className='mr-4 relative left-4 bg-blue-300 w-[102px] font-black text-black  hover:text-red-500 ' onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default CustomConfirmToast;