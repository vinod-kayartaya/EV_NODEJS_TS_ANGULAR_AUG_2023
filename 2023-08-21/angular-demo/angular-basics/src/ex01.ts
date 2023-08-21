import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// a component in angular is a class (along with a HTML part and an optional CSS part) that may contain:
// member variables and/or methods.
// These members can be accessed from the component's HTML part.
// A component class must be annotated with @Component decorator, that binds the HTML and CSS parts

@Component({
  selector: 'welcome',
  template: `<p>Welcome to Angular</p>`,
})
class WelcomeComponent {}

// ------------- ------------- ------------- ------------- -------------
@Component({
  selector: 'hello-world', // tag selector. Other selectors can be css-class selector (.hello-world) or id selector (#hello-world)
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
class HelloComponent {
  message = 'Hello, world!';

  rotateText = () => {
    this.message = this.message.substring(1) + this.message.charAt(0);
  };
}

// a component must be part of one and only one NgModule.
// a NgModule is also a class (generally nothing inside the class).
// the class must be annotated with @NgModule decorator, which has meta data for the entire module

@NgModule({
  declarations: [
    // components, directives, pipes are listed here
    HelloComponent,
    WelcomeComponent,
  ],
  providers: [
    // list of all injectables are given here
  ],
  imports: [
    // list of all modules that this module depends on
    BrowserModule, // takes care of DOM manipulation
  ],
  exports: [
    // the current module may have multiple members, but we want to expose only few of them.
    // they are listed here
  ],
  bootstrap: [
    // while this module may have multiple components, which are the components that are used in the index.html file?
    HelloComponent,
  ],
})
class HelloModule {}

// instructs the BrowserModule to place the <hello-world> component's html in the index.html
platformBrowserDynamic().bootstrapModule(HelloModule).catch(console.log);
