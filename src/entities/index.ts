export type Provider = {
  description: String,
  image: String,
  label: String,
  value: String
};

export type SelectOptions = {
  label: string,
  value: string
};

export type UploadedFiles = {
  uri: String,
  name: String
};

export type SolidError = {
  type: String,
  statusText: String,
  code: number
};

export type Annotation = {
  type: String,
  predicate: String,
  object: {}
};

export type FormFocus = {
  value: String,
  name: String,
  parentSubject: String | undefined,
  parentPredicate: String | undefined,
};

export type FormValue = {
  _formFocus: FormFocus
};

export type Expressions = {
  annotations: Array<Annotation> | undefined,
  predicate: String,
  type: String,
  valueExpr: any,
  _formValues: Array<FormValue | undefined>
};

export type Expression = {
  expressions: Array<Expressions>,
  type: String,
  _formFocus: FormFocus | undefined
};

export type Shape = {
  expression: Expression | undefined,
  id: String,
  type: String
};

export type ShexJ = {
  '@context': String,
  shapes: Array<Shape>,
  start: String | undefined,
  type: String,
  expression: Expression | undefined
};
