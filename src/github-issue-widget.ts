import '@primer/css/index.scss';

import {
  Options
} from './github-issue-widget.d';

export class GitHubIssueWidget {
  options: Options;

  constructor(options: Options) {
    this.options = options;

    this.options.repository = this.options.repository ?? ''
    this.options.branch = this.options.branch ?? ''
    this.options.issueSchemaPath = this.options.issueSchemaPath ?? ''
    this.options.boxTitle = this.options.boxTitle ?? 'Issue Tracker'
    this.options.boxDescription = this.options.boxDescription ?? 'You have the possibility to report errors or suggestions for improvement here. Thank you!'
    this.options.boxLogin = this.options.boxLogin ?? 'Login with GitHub'
    this.options.boxSubmit = this.options.boxSubmit ?? 'Submit Issue'
    this.options.appClientId = this.options.appClientId ?? ''
    this.options.appClientSecret = this.options.appClientSecret ?? ''
    this.options.appRedirectUri = this.options.appRedirectUri ?? ''
    this.options.appAuthorizationPath = this.options.appAuthorizationPath ?? 'https://github.com/login/oauth/authorize'
    this.options.appTokenPath = this.options.appTokenPath ?? 'https://github.com/login/oauth/access_token'
    this.options.appProfilePath = this.options.appProfilePath ?? 'https://api.github.com/user'
    this.options.appScope = this.options.appScope ?? ''
  }

  render (): string {
    let htmlExport: string = '';
    htmlExport += `<div class="box box--overlay position-fixed bottom-2 right-2 color-shadow-small">`;

    htmlExport += `<div class="box-header">
      <button href="#" class="box-btn-octicon btn-octicon float-right">
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <h3 class="box-title overflow-hidden pr-3">${this.options.boxTitle}</h3>
    </div>`;

    htmlExport += `<div class="box-body">`;
    htmlExport += `<p class="color-fg-muted">${this.options.boxDescription}</p>`;
    htmlExport += `<a href="https://github.com/${this.options.repository}/tree/${this.options.branch}" class="branch-name">${this.options.repository}</a>`;
    htmlExport += `</div>`;

    htmlExport += `<div class="box-footer">`;
    if (!this.isLoggedIn()) htmlExport += `<a href="${this.options.appAuthorizationPath}?client_id=${this.options.appClientId}" class="btn btn-primary" type="button">${this.options.boxLogin}</a>`;
    else htmlExport += `<button class="btn btn-primary" type="button">${this.options.boxSubmit}</button>`;
    htmlExport += `</div>`;

    htmlExport += `</div>`;
    return htmlExport;
  }

  isLoggedIn() {
    if(this.getCode()) {
      fetch(this.options.appTokenPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: this.options.appClientId, client_secret: this.options.appClientSecret, code: this.getCode() }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          return true
        })
        .catch((error) => {
          console.error('Error:', error);
          return false;
        });
    }

    return false;
  }

  getCode(): string | null {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('code');
  }
}
