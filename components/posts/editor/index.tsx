import React, { Dispatch, MutableRefObject } from 'react';
import { Toastdiv } from './style';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '../../App.css';
import { postApi } from '../../../services/api';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';

type UploadImageCallback = (imageUrl: string, message: string) => void;

type TPostEditorProps = {
  setContent: Dispatch<React.SetStateAction<string>>;
  editorRef: MutableRefObject<Editor | null>;
};

const PostEditor = ({ setContent, editorRef }: TPostEditorProps) => {
  //toast ui
  const handleChangeInput = () => {
    setContent(editorRef.current!.getInstance().getHTML());
  };

  const handleUploadImage = async (
    blob: Blob | File,
    callback: UploadImageCallback
  ) => {
    let formData = new FormData();
    formData.append('file', blob);
    try {
      const { data: url } = await postApi.uploadImages(formData);
      callback(url.url, '콜백 이미지 URL');
    } catch (err) {
      if (err instanceof ApiError) toast.error(err.message);
    }
  };

  return (
    <Toastdiv>
      <label>본문</label>
      <Editor
        ref={editorRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        onChange={handleChangeInput}
        useCommandShortcut={true}
        // colorSyntax 플러그인 적용
        plugins={[
          [
            colorSyntax,
            // 기본 색상 preset 적용
            {
              preset: ['#1F2E3D', '#4c5864', '#ED7675']
            }
          ]
        ]}
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'image', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol'],
          ['link']
        ]}
        previewHighlight={false}
        hooks={{
          addImageBlobHook: handleUploadImage
        }}
      ></Editor>
    </Toastdiv>
  );
};

export default PostEditor;
