import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserProfile {
  name: string;
  email: string;
  memberSince: string;
  avatar: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private userProfileSubject = new BehaviorSubject<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@email.com',
    memberSince: '2023',
    avatar: '',
    status: 'Active Member since 2023'
  });

  userProfile$ = this.userProfileSubject.asObservable();

  getUserProfile(): UserProfile {
    return this.userProfileSubject.value;
  }

  updateUserProfile(profile: Partial<UserProfile>) {
    this.userProfileSubject.next({ ...this.userProfileSubject.value, ...profile });
  }
} 