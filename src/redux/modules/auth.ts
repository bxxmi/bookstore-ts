import { createActions, handleActions } from "redux-actions";

// 로그인 인증 관리
// 타입 지정
interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

// 초기값 지정
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

// 액션 생성 함수
// 아래처럼 선언하면 생성한 액션 앞에 위에서 지정한 prefix가 붙는다.
export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

// 리듀서 생성
const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// saga
export function* authSaga() {}
