import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, UserProfile } from './user.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {
  editMode = false;
  profile: UserProfile;
  editProfile: UserProfile;
  avatarPreview: string = '';

  constructor(private userService: UserService) {
    this.profile = this.userService.getUserProfile();
    this.editProfile = { ...this.profile };
    this.userService.userProfile$.subscribe(profile => {
      this.profile = profile;
    });
  }

  onEditProfile() {
    this.editProfile = { ...this.profile };
    this.avatarPreview = this.profile.avatar;
    this.editMode = true;
  }

  onCancelEdit() {
    this.editMode = false;
    this.avatarPreview = '';
  }

  onSaveProfile() {
    this.userService.updateUserProfile({
      ...this.editProfile,
      avatar: this.avatarPreview || this.profile.avatar
    });
    this.editMode = false;
  }

  onAvatarChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.avatarPreview = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  getInitials(profile: UserProfile): string {
    if (!profile.name) return '';
    return profile.name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
}
