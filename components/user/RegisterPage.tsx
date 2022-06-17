import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as Api from "../../common/utils/api";
import {
  Form,
  ContentContainer,
  Field,
  Label,
  Input,
  BtnContainer,
  SubmitButton,
  TextBtnContainer,
  TextButton,
  ErrorMsg,
} from "./AccountPage.style";

interface RegisterValues {
  email: string;
  userName: string;
  password: string;
  confirmPassword?: string;
}

function RegisterPage() {
  const router = useRouter();

  const initialValue: RegisterValues = {
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("아이디를 다시 확인해 주세요.")
        .required("아이디를 입력해 주세요."),
      userName: Yup.string()
        .min(2, "이름은 2자 이상입니다.")
        .required("이름을 입력해 주세요."),
      password: Yup.string()
        .min(4, "비밀번호는 4자 이상입니다.")
        .required("비밀번호를 입력해 주세요."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호를 한 번 더 입력해 주세요."),
    }),
    onSubmit: async (values, actions) => {
      const { email, userName, password } = values;
      const newAccount: RegisterValues = { email, userName, password };

      try {
        const res = await Api.post("user/register", newAccount);
        router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <ContentContainer>
          <Field>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMsg>{formik.errors.email}</ErrorMsg>
            ) : null}
          </Field>
          <Field>
            <Label htmlFor="userName">이름</Label>
            <Input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <ErrorMsg>{formik.errors.userName}</ErrorMsg>
            ) : null}
          </Field>
          <Field>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMsg>{formik.errors.password}</ErrorMsg>
            ) : null}
          </Field>
          <Field>
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <ErrorMsg>{formik.errors.confirmPassword}</ErrorMsg>
            ) : null}
          </Field>
        </ContentContainer>
        <BtnContainer $registerPage>
          <SubmitButton type="submit">회원가입</SubmitButton>
          <TextBtnContainer>
            <Link href="/login">
              <TextButton>로그인 하러가기</TextButton>
            </Link>
          </TextBtnContainer>
        </BtnContainer>
      </Form>
    </>
  );
}

export default RegisterPage;
