import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  // 코드 리뷰 -> type은 enum으로 따로 빼기
  type: 'success' | 'error' | 'info' | 'action';
  message?: string;
  action?: string;
}

const customId = 'custom-id-yes';

const toastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: true,
  closeButton: false,
  toastId: customId
};

export function showToast({ type, message }: ToastProps) {
  switch (type) {
    case 'success':
      // enum으로 타입 지정했을 때 가독성 상승 -> case ToastType.success:
      toast.success(message || '성공적으로 완료되었습니다', {
        ...toastOptions
      });
      return;
    case 'error':
      toast.error(message || '다시 한번 시도해주세요', {
        ...toastOptions
      });
    case 'info':
      toast.error(message || '다시 한번 확인해주세요', {
        ...toastOptions
      });

    //... 생략
  }
}

export const CustomToast = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    font-family: 'Pretendard';
    border-radius: 50px;
    padding: 16px 28px;
    color: #fff;
    background: rgba(107, 115, 135, 0.8);
    word-wrap: break-word;
    white-space: nowrap;
    width: fit-content;
  }

  .Toastify__toast-icon {
    width: 22px;
    height: 22px;
  }

  .Toastify__toast--info {
    background: rgba(107, 115, 135, 0.8);
  }

  .Toastify__toast--success {
    background: rgba(48, 173, 120, 0.8);
  }

  .Toastify__toast--error {
    background: rgba(224, 72, 82, 0.8);
  }
`;
