export type LocalAuthenticationStrategyOptionsType = {
    provider: string;
    usernameField: 'Username';
    passwordField: 'Password';
    usernameFormat: 'EmailAddress' | 'RegularExpression';
    usernameRegEx: '[w-]+@([w-]+.)+[w-]+' | '.*';
};

export const localAuthenticationStrategyOptions: LocalAuthenticationStrategyOptionsType = {
    provider: 'local',
    usernameField: 'Username',
    passwordField: 'Password',
    usernameFormat: 'EmailAddress',
    usernameRegEx: '[w-]+@([w-]+.)+[w-]+'
};
