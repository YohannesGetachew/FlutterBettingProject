abstract class FormSubmissionStatus {
  // ?
  const FormSubmissionStatus();
}

class InitialFormSubmissionStatus extends FormSubmissionStatus {
  const InitialFormSubmissionStatus();
}

class FormSubmitting extends FormSubmissionStatus {}

class FormSubmissionSuccess extends FormSubmissionStatus {}

class FormSubmissionFailed extends FormSubmissionStatus {
  final Exception exception;

  FormSubmissionFailed(this.exception);
}
